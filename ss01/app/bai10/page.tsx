import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye, faCamera } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
  return (
    <div style={{height:"25px",width:"20px"}}>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faEye} />
      <FontAwesomeIcon icon={faCamera} />
    </div>
  );
}

export default Page;