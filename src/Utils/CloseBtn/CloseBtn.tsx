import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      size="small"
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;