import { useParams } from "react-router-dom";

const AboutProduct = () => {
  let {productId} = useParams();
  return <div>About{productId}</div>;
};

export default AboutProduct;
