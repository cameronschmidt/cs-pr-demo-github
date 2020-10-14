pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withSonarQubeEnv('SonarQube8_4') {
          script {
            def scannerHome = tool 'SonarQubeScannerCLI';
            def nodeHome = tool 'NodeJS';
            // No need to fetch master from origin; already done by the pipeline
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.nodejs.executable=${nodeHome}/bin/node "
          }
        }
      }
    }
  }
}
