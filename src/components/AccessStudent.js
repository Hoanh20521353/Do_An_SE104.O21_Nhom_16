import "../css/AccessStudent.css";
function AccessStudent() {
  return (
    <div className="form">
      <div className="form-title">
        <h3>BM1:</h3>
        <h3>Hồ sơ học sinh</h3>
      </div>
      <form className="form-container">
        <div className="form-container-item">
          <label for="name">Họ và tên</label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div className="form-container-item">
          <label for="date-birth">Ngày sinh</label>
          <input type="date" id="date" name="date-birth"></input>
        </div>
        <div className="form-container-item">
          <label for="gender">Giới tính</label>
          <select id="gender" name="gender">
            <option value="male">Nam</option>
            <option value="fmale">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div className="form-container-item">
          <label for="address">Địa chỉ</label>
          <textarea id="address" name="address"></textarea>
        </div>
        <div className="form-container-item">
          <label for="email">Email</label>
          <input type="email" id="email" name="email"></input>
        </div>
      </form>
      <div className="form-btn">
        <button class="btn " disabled>
          THÊM
        </button>
      </div>
    </div>
  );
}
export default AccessStudent;
