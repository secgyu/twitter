import { dbService } from "@/fbase";
import NweetItem from "@/components/NweetItem";
import type { Nweet } from "../models/nweet";
import { collection, onSnapshot, query, orderBy, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import NweetFactory from "@/components/NweetFactory";
import { User } from "@/models/user";

interface Props {
  userObj: User;
}

const Home = ({ userObj }: Props) => {
  const [nweets, setNweets] = useState<Nweet[]>([]);

  useEffect(() => {
    const nweetsQuery = query(collection(dbService, "nweets"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(nweetsQuery, (snapshot) => {
      const newArray = snapshot.docs.map(
        (document) =>
          ({
            id: document.id,
            ...document.data(),
          } as Nweet)
      );
      setNweets(newArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <NweetItem key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
