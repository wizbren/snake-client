let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === "w") {
    console.log("Move: up");
    connection.write("Move: up");
  };
  if (key === "a") {
    console.log("Move: left");
    connection.write("Move: left");
  };
  if (key === "s") {
    console.log("Move: down");
    connection.write("Move: down");
  };
  if (key === "d") {
    console.log("Move: right");
    connection.write("Move: right");
  };
  if (key === "1") {
    console.log("Say: Wasssssssup?");
    connection.write("Say: Wasssssssup?");
  };
  if (key === "2") {
    console.log("Say: Let\'ssssss play!")
    connection.write("Say: Let\'ssssss play!");
  };
  if (key === "3") {
    console.log("Say: Sssssssorry");
    connection.write("Say: Sssssssorry");
  };
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin; 
  stdin.setRawMode(true);      
  stdin.setEncoding("utf8");   
  stdin.resume();  
  stdin.on("data", handleUserInput);    
  return stdin;                
};

module.exports = setupInput;