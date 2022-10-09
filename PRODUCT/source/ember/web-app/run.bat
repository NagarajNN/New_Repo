%SYSTEMROOT%\System32\inetsrv\appcmd stop apppool /apppool.name:"ProductOneAppPool"
xcopy  /s /y  D:\MASTER\PRODUCT\source\cs\ProductOneBackend\bin\Debug\net6.0  ..\..\iis_host
%SYSTEMROOT%\System32\inetsrv\appcmd start apppool /apppool.name:"ProductOneAppPool"
call ember build environment=development
call copy_.bat
pause nul