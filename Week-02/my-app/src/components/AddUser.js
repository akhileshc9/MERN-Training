function AddUser(props) {
  const addUser = (e) => {
    e.preventDefault();
    const data = e.target.elements.uname.value;
    props.au(data);
  };

  return (
    <div className="card">
      <div className="crd-header">
        <p>User Details</p>
      </div>
      <div className="card-body">
        <form onSubmit={addUser}>
          <input
            className="form-control"
            type="text"
            name="uname"
            placeholder="Enter Name"
            required
          />
          <button>adduser</button>
          <p></p>
        </form>
      </div>
      <div className="crd-footer">
        <p>Contact Us</p>
      </div>
    </div>
  );
}
export default AddUser;
