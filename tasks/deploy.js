var
  config = require("../config/aws.json"),
  gulp = require("gulp"),
  awspublish = require("gulp-awspublish"),
  cacheTime = 15,
  headers = {"Cache-Control": "max-age=" + cacheTime + ", public"}

gulp.task("deploy", function () {
  var publisher = awspublish.create(config)

  console.log("Deploying to " + config.params.Bucket)

  gulp.src("./dist/**")
    .pipe(awspublish.gzip({ext: ""}))
    .pipe(publisher.publish(headers))
    .pipe(awspublish.reporter())
})
