import "../css/category.css";
import "../css/global.css";
function Category() {
  return (
    <div className="category">
      <div className="category-container">
        <h3 className="title">QUẢN LÍ HỌC SINH</h3>
        <div className="category-list">
          <ul className="category-list-items">
            <li className="category-item">
              <a href=" " className="category-item-name">
                Chức năng
              </a>
            </li>
            <li className="category-item">
              <a href=" " className="category-item-name">
                Danh mục
              </a>
            </li>
            <li className="category-item">
              <a href=" " className="category-item-name">
                Báo cáo
              </a>
            </li>
            <li className="category-item">
              <a href=" " className="category-item-name">
                Quy định
              </a>
            </li>
          </ul>
          <ul className="category-user">
            <li className="category-item">
              <img src="" alt=" " />
              <a
                href="https://www.w3schools.com"
                className="category-item-name"
              >
                Admin
              </a>
            </li>
            <li className="category-item">
              <img src="../images/logout.png" alt=" " />
              <a
                href="https://www.w3schools.com"
                className="category-item-name"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="content">abc</div> */}
      </div>
    </div>
  );
}

export default Category;
