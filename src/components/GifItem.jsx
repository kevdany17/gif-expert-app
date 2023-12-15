import { WhatsAppBtn } from './WhatsAppBtn';
export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <WhatsAppBtn url={url} />
    </div>
  );
};
