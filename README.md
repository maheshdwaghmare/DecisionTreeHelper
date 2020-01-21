# Decision Tree Helper

Created DecisionTreeHelper Project with .Net Core and AngularJS. User can select different choices Yes/No and based on choices user will get next questions. In the end, user will get outcome.
User can able to see choices he has made for last questions while selecting answering questions. After submitting result, it will get stored in text file in JSON format. When user click on Show Result button, he will be able to get choices he has made in last time.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Install .Net Core SDK
Windows Server configured with the Web Server (IIS) server role. If your server isn't configured to host websites with IIS, follow the guidance in the IIS configuration section of the [Host ASP.NET Core on Windows with IIS](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-3.1#iis-configuration) article and then return to this tutorial.

2. Install [.Net Core Windows Server Hosting](https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.1-windows-hosting-bundle-installer)

## Deployment

1. As I have already made changes in Program.cs and Startup.cs files, no need to make changes.

2. Create Application Pool in IIS with .Net Framework version as 'No Managed Code' and Manage pipelined mode as 'Integrated'.

3. Publish Application in specific folder and copy contents viz. wwwroor folder. DLLs and web.config files in newly created folder under wwwroot.

4. Create Website using already created App Pool and specify newly created folder path.

## Project snapshots

![1. Job Portal Home screen](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/1.%20Job%20Portal%20Home%20screen.JPG)

![2. Explore Open Positions](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/2.%20Explore%20Open%20Positions.JPG)

![3. Explored Open Positions](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/3.%20Explored%20Open%20Positions.JPG)

![4. Last Explored Position](https://github.com/maheshdwaghmare/DecisionTreeHelper/blob/master/Projects%20snapshots/4.%20Last%20Explored%20Position.JPG)

## Built With

* [.Net Core Framework 2.1](https://dotnet.microsoft.com/download/dotnet-core/2.1) - The web framework used

## Authors

* **Mahesh Waghmare**
