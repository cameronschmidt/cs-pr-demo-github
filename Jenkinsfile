pipeline {
  agent any
  stages {
    stage('Build') {
      tools {
        jdk "JAVA11"
      }
      steps {
        withSonarQubeEnv('SonarQube_LATEST') {
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
