import { createServer, Model, Factory, trait } from "miragejs";
import { add, parseISO } from "date-fns";
import faker, { image, name, internet, lorem } from "faker";

faker.seed(123);

let startingDate = parseISO("2020-01-14");
let server = createServer({
  timing: 1000,
  models: {
    tweet: Model,
  },

  factories: {
    tweet: Factory.extend({
      name() {
        return name.findName();
      },

      username() {
        return internet.userName();
      },

      text() {
        return lorem.sentence();
      },

      avatarUrl() {
        return image.avatar();
      },

      date(i) {
        return add(startingDate, { days: i }).toISOString();
      },

      fromSam: trait({
        name: "Sam Selikoff",
        username: "samselikoff",
        avatarUrl: "https://s3-media1.fl.yelpcdn.com/photo/s-6y_JlA4zER-R4MSAmHdQ/o.jpg",
      }),
    }),
  },

  routes() {
    this.namespace = "api";
    this.get("tweets");

    this.passthrough();
  },

  seeds(server) {
    // server.create("tweet", "fromSam", { text: "just setting up my twttr" });
    // server.create("tweet", "fromSam", { text: "Hi" });
    // server.create("tweet", "fromSam", {
    //   text: "I still don't understand useEffect",
    // });
    server.createList("tweet", 5);
  },
}); 

export default server;

// setInterval(() => {
//   server.create("tweet");
// }, 5000);