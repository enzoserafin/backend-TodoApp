const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`API ONLINE ON PORT ${PORT}`);
});