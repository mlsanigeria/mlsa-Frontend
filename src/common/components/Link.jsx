import PropTypes from 'prop-types';

const ExternalLink = ({ href, target, children }) => {
  const handleClick = () => {
    if (target === '_blank') {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <a href={href} target={target} rel="noopener noreferrer" onClick={handleClick}>
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string, // Optional prop for specifying the target
  children: PropTypes.node.isRequired,
};

ExternalLink.defaultProps = {
  target: '_blank', // Default value is '_blank'
};

export default ExternalLink;
