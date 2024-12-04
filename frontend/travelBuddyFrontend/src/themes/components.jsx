const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        padding: '10px 20px',
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: '16px',
        borderRadius: '12px',
      },
    },
  },
};

export default components;
