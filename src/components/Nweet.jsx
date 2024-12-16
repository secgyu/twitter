import { dbService, storageService } from "@/fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  // 삭제 로직
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      // Firestore 문서 삭제
      const nweetDocRef = doc(dbService, "nweets", nweetObj.id);
      await deleteDoc(nweetDocRef);

      // Storage 파일 삭제 (첨부된 이미지가 있는 경우)
      if (nweetObj.attachmentUrl) {
        const attachmentRef = ref(storageService, nweetObj.attachmentUrl);
        await deleteObject(attachmentRef);
      }
    }
  };

  // 편집 토글
  const toggleEditing = () => setEditing((prev) => !prev);

  // 입력값 변경
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  // 업데이트 로직
  const onSubmit = async (event) => {
    event.preventDefault();
    const nweetDocRef = doc(dbService, "nweets", nweetObj.id);
    await updateDoc(nweetDocRef, { text: newNweet });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newNweet} required />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" alt="attachment" />}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
