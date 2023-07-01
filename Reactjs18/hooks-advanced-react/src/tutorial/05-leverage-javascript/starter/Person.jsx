import avatar from '../../../assets/default-avatar.svg';

const Person = ({ id, name, nickName = 'has no nickname', images }) => {
  //   const img = images && images[0] && images[0].small && images[0].small.url;

  //   const img = images?.[0]?.small?.url || avatar;

  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      {/* {nickName && <p>NickName: {nickName} </p>} */}
      <p>NickName: {nickName} </p>
    </div>
  );
};

export default Person;
