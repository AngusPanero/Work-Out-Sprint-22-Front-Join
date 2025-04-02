const ItemDetailPage = ({ item }) => {

  return (
    <>
      <h3>{item.title}</h3>
      <h3>Completed: {`${item.completed}`}</h3>
    </>
  );
};

export default ItemDetailPage;
