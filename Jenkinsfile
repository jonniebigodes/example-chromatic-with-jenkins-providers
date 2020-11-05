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
      when {
          anyOf {
            branch 'main'
          }
      }
      steps {
         sh 'yarn chromatic --project-token=84svyadsh4w'
      }
    }      
  }
}