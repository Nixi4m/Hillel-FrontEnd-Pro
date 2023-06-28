// Parts
import ButtonMUI from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
// Helpers
import { LinkWrapper } from './styles';

function Button(props) {
  const {
    children, disabled, loading, reactHref, type,
  } = props;

  if (loading) {
    return (
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        {children}
      </LoadingButton>
    );
  }

  return (
    <ButtonMUI disabled={disabled} variant="contained" type={type}>
      {
          reactHref
            ? <LinkWrapper to={reactHref}>{children}</LinkWrapper>
            : children
      }
    </ButtonMUI>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
