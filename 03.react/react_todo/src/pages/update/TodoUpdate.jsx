// import Nav from "../../layout/Nav";
// import Header from "../../layout/Header";

export default function TodoUpdate() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Header title={"TodoApp 수정"} /> */}
      <header>
        <h1 className="font-bold text-white text-3xl px-7 py-7">
          TodoApp 수정
        </h1>
      </header>

      <div id="content  w-[390px] h-[80vh] ">
        <div className="wrapper h-[650px] px-7 py-7 bg-[#ffffff]">
          <form className="form  flex flex-col h-[100%]">
            <div className="titleBox flex flex-col justify-evenly ">
              <label htmlFor="title" className="py-3 font-semibold text-xl">
                제목
              </label>
              <input
                id="title"
                type="text"
                className="titleInput border border-gray-300 border-solid"
              />
            </div>
            <div className="detailBox flex flex-col justify-between ">
              <label htmlFor="detail" className="py-3 font-semibold text-xl">
                상세 내용
              </label>
              <textarea
                id="detail"
                className="detailInput border border-gray-300 border-solid min-h-[250px]"
              ></textarea>
            </div>
            <div className="executionCheck py-3 ">
              <label className="pr-3 font-semibold text-l">실행여부</label>
              <input
                type="checkbox"
                className="border border-gray-300 border-solid"
              />
            </div>
            <button
              className="addButton py-4 bg-[#383cc2] text-xl text-white rounded-xl "
              type="button"
            >
              수정 완료하기
            </button>
            <button
              className="deleteButton mt-2 py-4 bg-[#c23838] text-xl text-white rounded-xl"
              type="button"
            >
              삭제하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
