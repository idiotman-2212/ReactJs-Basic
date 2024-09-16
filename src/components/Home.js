const Home = () => {
  return (
    <>
      <div className="home-container">
      <h2>Yêu cầu:</h2>
    <p>Sử dụng API từ trang web <a href="http://reqres.in/">http://reqres.in/</a> để tạo website.</p>
    <p>Sử dụng thư viện React để tạo một màn hình website bao gồm các chức năng:</p>
    
    <ol>
        <li>Đăng nhập</li>
        <li>Thêm User</li>
        <li>Sửa User</li>
        <li>Xóa User</li>
        <li>Hiển thị tất cả User</li>
        <li>Tìm kiếm User theo id</li>
        <li>Sắp xếp theo FirstName</li>
    </ol>
    
    <p>Tự do tùy chỉnh HTML, CSS để có một website nhẹ nhàng, khoa học và đẹp.</p>
</div>
    </>
  );
};
export default Home;
