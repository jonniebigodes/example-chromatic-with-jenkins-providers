pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages { 
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
     
    stage('Chromatic Deployment') {
      environment {
        CHROMATIC_PROJECT_TOKEN = '84svyadsh4w'
      }
      when {
          branch '*/main'
      }
      steps {
         sh "yarn chromatic --project-token=${CHROMATIC_PROJECT_TOKEN}"
      }
    }      
  }
}