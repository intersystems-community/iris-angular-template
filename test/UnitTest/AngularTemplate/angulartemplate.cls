Class UnitTest.AngularTemplate.angulartemplate Extends %UnitTest.TestCase
{

ClassMethod Run()
{
  do ##class(%UnitTest.Manager).DebugRunTestCase(..%ClassName(1))
}

Method OnBeforeOneTest(testname As %String) As %Status
{
  TStart 
  Quit $$$OK
}

Method OnAfterOneTest(testname As %String) As %Status
{
  TROllback 
  Quit $$$OK
}

}