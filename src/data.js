function getDateXDaysAgo(numOfDays, date = new Date()) {
  const daysAgo = new Date(date.getTime());
  daysAgo.setDate(date.getDate() - numOfDays);
  return daysAgo;
}

const date = new Date();

export const data = [
  {
    alt: "Sint Maarten",
    country: "Netherlands",
    date: getDateXDaysAgo(1, date).toDateString(),
    description: "Part of the Kingdom of the Netherlands located on the southern part of a Caribbean island shared with Saint Martin. Its natural features span lagoons, beaches and salt pans. The port is a popular cruise-ship stop.",
    imgSrc: "https://images.unsplash.com/photo-1551963837-2a42d66d39d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
    location: "Sint Maarten",
    locationUrl: "https://www.google.com/maps/place/Sint+Maarten/@18.0291228,-63.1291404,12z/data=!3m1!4b1!4m5!3m4!1s0x8c0e6e62d6f890c3:0x728b2cc226338f42!8m2!3d18.04248!4d-63.05483",
  },
  {
    alt: "Mardi Gras",
    country: "USA",
    date: "Fat Tuesday 2022",
    description: "The Carnival celebration begins on or after the Christian feasts of the Epiphany (Three Kings Day) and culminating on the day known as Fat Tuesday, the practice of the night of eating rich, fatty foods before the ritual Lenten sacrifices and fasting of the Lenten season.",
    imgSrc: "https://images.unsplash.com/photo-1518630774896-4a27c374a744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    location: "Mardi Gras",
    locationUrl: "https://www.google.com/maps/place/Bourbon+St,+New+Orleans,+LA/@29.9529221,-90.069606,16.75z/data=!4m8!1m2!2m1!1smardi+gras+new+orleans!3m4!1s0x8620a611d6a2855d:0xb6d817d06be158bd!8m2!3d29.9547115!4d-90.0691554?hl=en",
  },
  {
    alt: "japan",
    country: "japan",
    date: getDateXDaysAgo(31, date).toDateString(),
    description: "Located on the island of Honshū, is the highest mountain in Japan. It is the second-highest volcano located on an island in Asia, and seventh-highest peak of an island on Earth. Mount Fuji is an active volcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan.",
    imgSrc: "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    location: "Mount Fuji",
    locationUrl: "https://www.google.com/maps?ll=35.360556,138.7275&q=35.360556,138.7275&hl=en&t=m&z=12",
  },
  {
    alt: "Dimmuborgir",
    country: "Iceland",
    date: getDateXDaysAgo(100, date).toDateString(),
    description: "Dimmuborgir is a large area of unusually shaped lava fields east of Mývatn in Iceland. The area is composed of various volcanic caves and rock formations, reminiscent of an ancient collapsed citadel. The dramatic structures are one of Iceland's most popular natural tourist attractions.",
    imgSrc: "https://images.unsplash.com/photo-1533491175253-e43a7363e0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    location: "Dimmuborgir",
    locationUrl: "https://www.google.com/maps/place/Lava+field+Dimmuborgir/@65.6028381,-16.9459133,14z/data=!4m13!1m6!2m5!1sdimmuborgir!5m3!5m2!4m1!1i2!3m5!1s0x48cd9f2312044dd9:0x801f4d9f36622316!8m2!3d65.5912203!4d-16.91228!15sCgtkaW1tdWJvcmdpcpIBC2hpa2luZ19hcmVh?hl=en",
  }
]