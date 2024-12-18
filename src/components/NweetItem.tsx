import { dbService, storageService } from "@/fbase";
import { Nweet } from "@/models/nweet";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  nweetObj: Nweet;
  isOwner: boolean;
}

const NweetItem = ({ nweetObj, isOwner }: Props) => {
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
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  // 업데이트 로직
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nweetDocRef = doc(dbService, "nweets", nweetObj.id);
    await updateDoc(nweetDocRef, { text: newNweet });
    setEditing(false);
  };

  return (
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input onChange={onChange} value={newNweet} required placeholder="Edit your nweet" autoFocus className="formInput" />
            <input type="submit" value="Update Nweet" className="formBtn" />
          </form>
          <button onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" alt="attachment" />}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NweetItem;
