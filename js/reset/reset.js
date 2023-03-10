let GameWins = {
  amount() {
    return player.gameWins;
  },
  multiplier() {
    return Math.pow(1.05, this.amount());
  },
  increment() {
	if (confirm('Do you really want to reset the game? You will lose all your progress, and get a 1.05x multiplier.')) {
    Notifications.notify('Game has been reset!', 'saveLoad');
    player.gameWins++;
	let oldWins = player.gameWins
    Saving.resetGame();
	player.gameWins = oldWins
	}
  },
}