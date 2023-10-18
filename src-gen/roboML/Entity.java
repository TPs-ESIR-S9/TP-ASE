/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Entity</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Entity#getEntityType <em>Entity Type</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getEntity()
 * @model
 * @generated
 */
public interface Entity extends EObject {
	/**
	 * Returns the value of the '<em><b>Entity Type</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Entity Type</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setEntityType(RMLObject)
	 * @see roboML.RoboMLPackage#getEntity_EntityType()
	 * @model
	 * @generated
	 */
	RMLObject getEntityType();

	/**
	 * Sets the value of the '{@link roboML.Entity#getEntityType <em>Entity Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Entity Type</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getEntityType()
	 * @generated
	 */
	void setEntityType(RMLObject value);

} // Entity
