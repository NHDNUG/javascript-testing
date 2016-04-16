
Properties {
    $BuildRoot = 'C:\Projects\javascript-testing'
    $JavascriptTestsNodeModulesDirectory = "node_modules"
    }
    
 
    
# Enforce best practices
# Set-StrictMode -Version Latest

#=================================================================================================
# Synopsis: Help Documentation for build script tasks
#=================================================================================================
Task ? {
    WriteDocumentation
}

#=================================================================================================
# Synopsis: Default task
#=================================================================================================
Task Default -depends Build


#=================================================================================================
# Synopsis: Run Eleanor Javascript Tests
#=================================================================================================
Task Run-JsTests  {
    $NodeExe = 'C:\Program Files\nodejs\node.exe'

        Exec { & $NodeExe node_modules/mocha-phantomjs/bin/mocha-phantomjs testRunner.html }
    Set-Location $BuildRoot
}

