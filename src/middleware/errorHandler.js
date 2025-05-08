export default (err, req, res, next) => {
    console.error('❌ Error Handler:', err);
    res.status(500).json({ status: 'error', message: err.message });
  };
  