# Comparação

|Linguagem  |Framework/Lib|TPS      |% Erros|HTOP|Sys Monitor|JMetter|
|-----------|-------------|---------|-------|----|-----------|-------|
|Java 11    |Spring Boot  |~477     |0%     |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/htop-java.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/sysmon-java.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/jmetter-java.png" width="100" height="100">   |
|C#         |NetCore 5    |~188     |0.38%  |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/htop-dotnet.png" width="100" height="100"> |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/sysmon-dotnet.png" width="100" height="100"> |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/jmetter-dotnet.png" width="100" height="100"> |
|PHP 8      |N/A          |~40      |0%     |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/htop-php.png" width="100" height="100">    |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/sysmon-php.png" width="100" height="100">    |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/jmetter-php.png" width="100" height="100">    |
|NodeJs     |Exppress     |~22      |0%     |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/htop-node.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/sysmon-node.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/jmetter-node.png" width="100" height="100">   |
|Rust       |Wrap         |~2       |0%     |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/htop-rust.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/sysmon-rust.png" width="100" height="100">   |<img src="https://raw.githubusercontent.com/ibsonRafael/simple_benchmark/main/imgs/jmetter-rust.png" width="100" height="100">   |


```java
cd java
mvn spring-boot:run
```
```c#
cd dotnet
dotnet run
```
```node
cd node
node app.js
```
```rust
cd rust
cargo run
```

Todos os exeplos foram executados em um máquina rodando Ubuntu 20, com 32 GB de RAM e Cores de 3.2Ghz, já os scripot de teste Jmmeter for rodado em um Mac Pro i7 rodando Catalina com 64 GB de RAM.

