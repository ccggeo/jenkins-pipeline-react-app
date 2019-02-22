
node ('master'){
	stage ('Build on master'){

		environment {
			CI = 'true'
		}

	}
	stage('Build') {
			sh 'npm install'
	}
	stage('Test') {
			sh './jenkins/scripts/test.sh'
	}
	stage('Deliver') {
			sh './jenkins/scripts/deliver.sh'
			sh './jenkins/scripts/kill.sh'
	}
}


node ('agent01'){
	stage ('Build on master'){

		environment {
			CI = 'true'
		}

	}
	stage('Build') {
			sh 'npm install'
	}
	stage('Test') {
			sh './jenkins/scripts/test.sh'
	}
	stage('Deliver') {
			sh './jenkins/scripts/deliver.sh'
			sh './jenkins/scripts/kill.sh'
	}
}
