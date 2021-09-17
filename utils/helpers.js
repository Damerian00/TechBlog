module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">🕹</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">🧮</span>`;
      }
    },
    iff: (user_id, comment_id, opts) => {
      const bool = user_id == comment_id;
      console.log("This is the user_id " + user_id);
      console.log("This is the comment " + comment_id);
      if (bool) {
          return opts.fn(this);
      } else {
          return opts.inverse(this);
      }
  },
    }
