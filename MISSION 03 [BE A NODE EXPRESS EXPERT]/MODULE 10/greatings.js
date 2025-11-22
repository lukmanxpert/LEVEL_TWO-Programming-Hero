const pro = process.argv;

const names = pro[2] || "Guest";

const time = new Date().getHours();

if (time < 12) {
  console.log(`Good Morning, ${names}`);
} else if (time < 18) {
  console.log(`Good Afternoon, ${names}`);
} else {
  console.log(`Good Night, ${names}`);
}
