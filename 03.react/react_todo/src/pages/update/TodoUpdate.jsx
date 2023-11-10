import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function TodoUpdate() {
  return (
    <>
      <Header title={"TodoApp 수정"} />
      <div id="content">
        <div className="wrapper">
          <form className="form">
            <div className="titleBox">
              <label htmlFor="title">제목</label>
              <input id="title" type="text" className="titleInput" />
            </div>
            <div className="detailBox">
              <label htmlFor="detail">상세 내용</label>
              <textarea id="detail" className="detailInput"></textarea>
            </div>
            <div className="executionCheck">
              <label>실행여부</label>
              <input type="checkbox" />
            </div>
            <button className="addButton" type="button">
              수정 완료하기
            </button>
            <button className="deleteButton" type="button">
              삭제하기
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
