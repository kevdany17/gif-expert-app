import PropTypes from 'prop-types';
import { WhatsAppBtn } from './WhatsAppBtn';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <WhatsAppBtn url={url} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
