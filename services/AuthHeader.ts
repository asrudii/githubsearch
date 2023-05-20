const authHeader = () => {
  return { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` };
};

export default authHeader;
