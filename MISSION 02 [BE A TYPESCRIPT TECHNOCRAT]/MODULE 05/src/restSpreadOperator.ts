const friends = ["Kal", "Jamal, Bulbul"];
const schoolFriends = ["Shawn", "Suheb"];
const collegeFriends = ["Shuvo", "Ikhon"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

// console.log(friends);

// todo: rest operator
const sentInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Invitation sent to ${friend}`);
  });
};

sentInvite("Suheb", "Shawn", "Ikhon");
