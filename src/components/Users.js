import CustomButton from './CustomButton';

function User(props) {
  return (
    <div className="square-style">
      {props.user.age}살 - {props.user.name}
      {/* // props로 받은 age와 name을 표시 */}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
}

export default User;
