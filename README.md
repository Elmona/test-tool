# Test tool

# Motivation
Regression testing is boring, this is a tool to automate manual tests. When you build a website every URI should work. There are several ways you can use this tooling to make sure every URI returns the right status code.

# Installation
## Prerequisites
```
npm
```
  
```
npm i test-tool -g
```

# Common usage
```
test https://www.example.com
```
This command will try to download https://www.example.com/sitemap.xml and randomly select a number of URIS, then fetch them all and check the status code.