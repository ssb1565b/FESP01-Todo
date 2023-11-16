/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

function TodoList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios(`http://localhost:33088/api/todolist`);
    setData(res.data.items);
    setNewData(res.data.items);
  };

  const searchData = (isChange) => {
    const res = data.filter((item) => {
      console.log("is", isChange, item);
      return item.title.includes(isChange);
    });
    if (res.length === 0) {
      return setNewData(["결과값이 없습니다."]);
    }
    setNewData(res);
  };

  const updateData = async (isChecked, id) => {
    try {
      const body = {
        title: data.title,
        content: data.content,
        done: isChecked,
      };
      await axios
        .patch(`http://localhost:33088/api/todolist/${id}`, body)
        .then((response) => {
          console.log("수정 완료", response);
          // navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const dataSet = typeof newData[0] !== "string" ? newData : data;
  return (
    <>
      <Header title={"TodoApp"} />
      <div className="content bg-[white]">
        <input
          className="mx-7 my-7 w-[85%]"
          type="text"
          onChange={(e) => searchData(e.target.value)}
        />
        <ul className="todolist mx-7 my-7">
          {typeof newData[0] !== "string" ? (
            dataSet?.map((el) => {
              return (
                <li key={el._id} className="my-5">
                  <input
                    type="checkbox"
                    defaultChecked={el.done}
                    onClick={(cur) => updateData(cur.target.checked, el._id)}
                  />
                  <span
                    className="text-xl  px-5"
                    onClick={() => navigate(`/detail?_id=${el._id}`)}
                  >
                    {el.title}
                  </span>
                </li>
              );
            })
          ) : (
            <p>해당 내용이 없습니다.</p>
          )}
        </ul>
        <button
          className="bg-gray-400"
          id="addButton"
          aria-label="등록 화면으로 이동버튼"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}

export default TodoList;
