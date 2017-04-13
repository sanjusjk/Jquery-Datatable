
Partial Class MasterPages_Default
    Inherits System.Web.UI.MasterPage

    Protected Sub ScriptManager1_AsyncPostBackError(ByVal sender As Object, ByVal e As System.Web.UI.AsyncPostBackErrorEventArgs) Handles ScriptManager1.AsyncPostBackError

        Microsoft.ApplicationBlocks.ExceptionManagement.ExceptionManager.Publish(e.Exception)

    End Sub
End Class

