#![deny(warnings)]
use warp::Filter;
use warp::http::StatusCode;


#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let hello = warp::path!("api")
        .and_then(api_execution);

    warp::serve(hello)
        .run(([192, 168, 68, 117], 8080))
        .await;

    Ok(())
}


async fn api_execution() -> Result<impl warp::Reply, warp::Rejection> {
    let mut _vk;
    for _i in (0..500).step_by(1){
        for _j in (0..500).step_by(1){
            for k in (0..50).step_by(1){
                _vk = k;
            }
        }
    }
    Ok(warp::reply::with_status(
        "<span style=\"color: green\">Hello Rust!</span>",
        StatusCode::CREATED,
    ))
}