pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages { 
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
     
    stage('Publish to Chromatic') {
      when {
        branch 'main'
      }
      environment {
        CHROMATIC_PROJECT_TOKEN = '84svyadsh4w'
      }
      steps {
         sh "yarn chromatic --project-token=${CHROMATIC_PROJECT_TOKEN} --auto-accept-changes"
      }
    }      
  }
}