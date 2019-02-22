
node ('master'){
	stage('Build') {
			sh 'npm install'
	}
	stage('Test') {
		environment {
			CI = 'true'
		}
			sh './jenkins/scripts/test.sh'
	}
	stage('Deliver') {
			sh './jenkins/scripts/deliver.sh'
			sh './jenkins/scripts/kill.sh'
	}
}


node ('agent01'){
	stage('Build') {
			sh 'npm install'
	}
	stage('Test') {
		environment {
			CI = 'true'
		}
			sh './jenkins/scripts/test.sh'
	}
	stage('Deliver') {
			sh './jenkins/scripts/deliver.sh'
	}
}
