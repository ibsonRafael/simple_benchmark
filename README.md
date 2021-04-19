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