
node ('master'){
	stage ('Build on master'){

		environment {
			CI = 'true'
		}

	}
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

node ('agent01'){
	stage ('Build on agent01'){

		environment {
			CI = 'true'
		}

	}
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




