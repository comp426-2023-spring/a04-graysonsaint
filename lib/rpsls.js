const rps_shots = ['rock', 'paper', 'scissors'];
const rpsls_shots = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

export {rps_shots, rpsls_shots};

export function rps(playerShot = null) {
    const oppShot = rand(rps_shots);
    if(!playerShot) {
        return { player: oppShot };
    } else if (rps_shots.includes(playerShot)) {
        const result = gameResult(playerShot, oppShot);
        return { player: playerShot, opponent: oppShot, result: result};
    } else {
        throw new Error('Invalid input');
        return null;
    }
}

export function rpsls(playerShot = null) {
    const oppShot = rand(rpsls_shots);
    if(!playerShot) {
        return { player: oppShot };
    } else if (rpsls_shots.includes(playerShot)) {
        const result = gameResult(playerShot, oppShot);
        return { player: playerShot, opponent: oppShot, result: result};
    } else {
        throw new Error('Invalid input');
        return null;
    }
}

function rand(args) {
    return args[Math.floor(Math.random() * args.length)];
}

function gameResult(playerShot, oppShot) {
    if (playerShot === oppShot) {
        return 'tie'
    } else if (
        (playerShot === "scissors" && oppShot === "paper") ||
        (playerShot === "paper" && oppShot === "rock") ||
        (playerShot === "rock" && oppShot === "lizard") ||
        (playerShot === "lizard" && oppShot === "spock") ||
        (playerShot === "spock" && oppShot === "scissors") ||
        (playerShot === "scissors" && oppShot === "lizard") ||
        (playerShot === "lizard" && oppShot === "paper") ||
        (playerShot === "paper" && oppShot === "spock") ||
        (playerShot === "spock" && oppShot === "rock") ||
        (playerShot === "rock" && oppShot === "scissors")
    ) {
        return 'win';
    } else {
        return "lose";
    }
}