import Card from "@mui/material/Card";

const ActiveUsersCard = () => {
  return (
    <Card
      className="w-1/5 h-96 flex flex-col justify-center items-center p-8"
      sx={{
        backgroundColor: "#1b1a38",
        borderRadius: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 className="text-white">Active users:</h1>
      <p className="text-white">Active Users</p>
    </Card>
  );
};

export default ActiveUsersCard;