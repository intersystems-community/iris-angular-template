Class AngularTemplate.Demo.Persistent Extends (%Persistent, %pkg.isc.rest.model.adaptor)
{

Property Name As %String;

/// Name of the resource at the REST level
/// Subclasses MUST override this
Parameter RESOURCENAME As STRING = "demo-persistent";

ClassMethod CheckPermission(pID As %String, pOperation As %String, pUserContext As %RegisteredObject, ByRef URLParams) As %Boolean
{
    Quit 1
}

Storage Default
{
<Data name="PersistentDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DataLocation>^AngularTemplateF6A2.PersistentD</DataLocation>
<DefaultData>PersistentDefaultData</DefaultData>
<IdLocation>^AngularTemplateF6A2.PersistentD</IdLocation>
<IndexLocation>^AngularTemplateF6A2.PersistentI</IndexLocation>
<StreamLocation>^AngularTemplateF6A2.PersistentS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}

