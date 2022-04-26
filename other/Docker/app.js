const { exec } = require("child_process");

exec("_HASH=$(cat /proc/self/cgroup | head -1 | head -1 /proc/self/cgroup|cut -d/ -f3) && curl --unix-socket /var/run/docker.sock -X POST http://localhost/v1.41/containers/$_HASH/restart", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // cat /proc/self/cgroup | head -1 | tr --delete ‘10:memory:/docker/’
});