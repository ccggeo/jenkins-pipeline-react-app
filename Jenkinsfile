pipeline {
	agent master 
		environment {
			CI = 'true'
		}
	stages {
		stage('Build') { 
			steps {
				sh 'npm install' 
			}
		}
		stage('Test') {
			steps {
				sh './jenkins/scripts/test.sh'
			}
		}
		stage('Deliver') {
			steps {
				sh './jenkins/scripts/deliver.sh'
                sh './jenkins/scripts/kill.sh'
			}
		}
	}


	agent slave01 
		environment {
			CI = 'true'
		}
	stages {
		stage('Build') { 
			steps {
				sh 'npm install' 
			}
		}
		stage('Test') {
			steps {
				sh './jenkins/scripts/test.sh'
			}
		}
		stage('Deliver') {
			steps {
				sh './jenkins/scripts/deliver.sh'
			}
		}
	}




}
